import { NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CognitiveServicesComponent } from './cognitive-services.component';
import { VisionComponent } from './vision/vision.component';
import { EmotionRecognitionComponent } from './emotion/emotion-recognition.component';
import { HeroBannerComponent } from './shared/hero-banner/hero-banner.component';
import { DemoRoutingModule } from './demo-routing.module';
import { CognitiveServicesModule } from '../cognitive-services/cognitive-services.module';
import { FaceViewerComponent } from './face/face-viewer/face-viewer.component';
import { FaceDetectionComponent } from './face/face-detection/face-detection.component';
import { FaceVerificationComponent } from './face/face-verification/face-verification.component';
import { ComputerVisionReadTextComponent } from './computer-vision/computer-vision-read-text/computer-vision-read-text.component';
import { ComputerVisionAnalyzeImageComponent } from './computer-vision/computer-vision-analyze-image/computer-vision-analyze-image.component';
import { EightiesProfileComponent } from './eighties-profile/eighties-profile.component';
import { TextAnalysisComponent } from './text/text-analysis/text-analysis.component';
import { HomeComponent } from './home/home.component';
import { PersonalityComponent } from './personality/personality.component';

@NgModule({
  imports: [CommonModule, FormsModule, CognitiveServicesModule, DemoRoutingModule],
  declarations: [
    EmotionRecognitionComponent,
    FaceViewerComponent,
    FaceDetectionComponent,
    FaceVerificationComponent,
    HeroBannerComponent,
    ComputerVisionReadTextComponent,
    ComputerVisionAnalyzeImageComponent,
    TextAnalysisComponent,
    HomeComponent,
    EightiesProfileComponent,
    PersonalityComponent
  ],
  providers: [Title]
})
export class DemoModule {}
