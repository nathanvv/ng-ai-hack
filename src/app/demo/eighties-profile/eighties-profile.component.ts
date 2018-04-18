import { Component, OnInit, Input, Output, ViewChild } from '@angular/core';
import { SafeResourceUrl, DomSanitizer, Title } from '@angular/platform-browser';
import { FaceViewerComponent } from '../face/face-viewer/face-viewer.component';
import { ImagePair, IFace } from '../../cognitive-services/models/face.models';
import { ImageSelectedEvent } from '../vision/vision.component';
import { FaceDataService } from '../../cognitive-services/face-data.service';
import { environment } from '../../../environments/environment';
import { CognitiveServicesComponent } from '../cognitive-services.component';

@Component({
    selector: 'app-eighties-profile',
    templateUrl: './eighties-profile.component.html',
    styleUrls: ['./eighties-profile.component.css']
})
export class EightiesProfileComponent extends CognitiveServicesComponent implements OnInit {
    @ViewChild('fvc1') viewerComponent1: FaceViewerComponent;
    @ViewChild('fvc2') viewerComponent2: FaceViewerComponent;

    apiTitle = 'Facial Recognition API';
    apiDescription = 'Detect human faces and compare similar ones, organize people into groups according to visual similarity, and identify previously tagged people in images.';

    imagePairs: Array<ImagePair>;
    personalities: Array<Personality>;
    selectedImagePair: ImagePair;
    faceId1: string;
    faceId2: string;
    verificationStatus: string;
    resultStatus: string;
    isMatchResultEmpty = true;

    public constructor(private titleService: Title,
        private faceDataService: FaceDataService) {
        super();
        this.titleService.setTitle('Face Verification');
    }

    onFaceDetecting() {
        this.errorMessage = '';
    }

    ngOnInit() {
        this.isLoading = false;
        this.imagePairs = environment.faceImagePairs;
        this.personalities = environment.eightiesBabies;
        console.log(this.viewerComponent1);
        this.selectImagePair(this.imagePairs[0]);
        this.viewerComponent1.imageSelected.subscribe((e: ImageSelectedEvent) => {
            this.selectedImagePair = { image1: e.imagePath, image2: this.selectedImagePair.image2 };
        });
        this.viewerComponent1.faceDetected.subscribe((faces: Array<IFace>) => {
            if (this.validateFace(faces)) {
                this.faceId1 = faces[0].faceId;
                this.verifyFaces();
                // this.verifyFaces();
            }
        });

        this.viewerComponent2.imageSelected.subscribe((e: ImageSelectedEvent) => {
            this.selectedImagePair = { image1: this.selectedImagePair.image1, image2: e.imagePath };
        });
        this.viewerComponent2.faceDetected.subscribe((faces: Array<IFace>) => {
            if (this.validateFace(faces)) {
                console.log(faces[0]);
                let perIndex = 0;
                this.personalities.forEach((value: Personality, index:number) => {
                    if (value.url === this.viewerComponent2.internetImageUrl) {
                        value.guid = faces[0].faceId;
                        perIndex = index++;
                    }
                });
                this.checkAllFaces(perIndex);
                this.faceId2 = faces[0].faceId;
                // this.verifyFaces();
            }
        });
    }

    checkAllFaces(index: number) {
        this.personalities.forEach((value: Personality, i: number) => {
            if (index === i) {
                this.viewerComponent2.internetImageUrl = value.url;
                this.viewerComponent2.onInternetUrlSelected();
            }
        });
    }

    checkAllFaces2() {
        this.personalities.forEach((value: Personality, i: number) => {
           this.faceId2 = value.guid;
           this.verifyFaces();
        });
    }

    selectImagePair(imagePair: any) {
        this.selectedImagePair = imagePair;
        this.viewerComponent1.selectStockImage(imagePair.image1);
        // this.viewerComponent2.selectStockImage(imagePair.image2);
    }

    validateFace(faces: Array<IFace>): boolean {
        if (faces.length === 0) {
            this.verificationStatus = 'No faces detected. Please choose an image containing one face.';
            return false;
        } else if (faces.length > 1) {
            this.verificationStatus = 'More than one face detected. Please choose an image containing only one face.';
            return false;
        }

        return true;
    }

    verifyFaces() {
        let highest = 0;
    
        if (this.faceId1 && this.faceId2) {
            console.log('faces');
            console.log(this.faceId1);
            console.log(this.faceId2);
            this.faceDataService.verify(this.faceId1, this.faceId2).then(result => {
                
                if (result.isIdentical) {
                    this.verificationStatus = 'The two faces belong to the same person.';
                } else {
                    this.verificationStatus = 'The two faces belong to different people.';
                }
                this.resultStatus = `Confidence is ${result.confidence}`;
            })
            .catch((error) => {
                this.errorMessage = error;
            });
        }
    }

    onError(errorMessage: string) {
        this.errorMessage = errorMessage;
    }
}
