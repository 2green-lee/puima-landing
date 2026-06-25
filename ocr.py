import Cocoa
import Vision
import sys

def recognize_text(image_path):
    url = Cocoa.NSURL.fileURLWithPath_(image_path)
    image = Cocoa.CIImage.imageWithContentsOfURL_(url)
    
    request = Vision.VNRecognizeTextRequest.alloc().init()
    request.setRecognitionLanguages_(["ko-KR", "en-US"])
    request.setUsesLanguageCorrection_(True)
    
    handler = Vision.VNImageRequestHandler.alloc().initWithCIImage_options_(image, None)
    success, error = handler.performRequests_error_([request], None)
    
    if success:
        results = request.results()
        for observation in results:
            candidate = observation.topCandidates_(1).firstObject()
            print(candidate.string())
    else:
        print("Error:", error)

recognize_text(sys.argv[1])
