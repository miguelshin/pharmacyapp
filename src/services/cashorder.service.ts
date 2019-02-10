import { Injectable } from "@angular/core";
import { Platform } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { CashOrder } from "../models/cashorder.model";
import  firebase from 'firebase';
import { environment } from "../environment/environment";
import { File } from '@ionic-native/file';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Transfer, TransferObject} from '@ionic-native/transfer';
import { LoginService } from "./login.service";

@Injectable()
export class CashOrderService {
  BASE_API_URL:string = 'https://pharmacy-app-rest.herokuapp.com/';
  public cameraImage: String;
  storageDirectory: string = '';
  private fileTransfer: TransferObject; 
  constructor(private http: HttpClient, 
    private loginService: LoginService,
    private file: File,
    private camera: Camera,
    private transfer: Transfer,
    public platform: Platform) {
      firebase.initializeApp(environment.firebase)
    }
    
    ngOnInit(): void { 
    }
    
    getCashOrders(month, year): Observable<CashOrder[]> {
      let token = this.loginService.getToken();
      let headers = new HttpHeaders({
        'Authorization' : 'Bearer ' + token
      });
      
      return this.http.get<CashOrder[]>(this.BASE_API_URL + 'rest/cashOrder/' + month + "/" + year, { headers });
    }
    
    getCashOrder(cashOrderCode: string): Observable<CashOrder> {
      let token = this.loginService.getToken();
      let headers = new HttpHeaders({
        'Authorization' : 'Bearer ' + token
      });
      
      return this.http.get<CashOrder>(this.BASE_API_URL + 'rest/cashOrder/' + cashOrderCode, { headers });
    }
    
    saveCashOrder(cashOrder: CashOrder) {
      cashOrder.code = null;
      let body = JSON.stringify(cashOrder);
      let token = this.loginService.getToken();
      let headers = new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization' : 'Bearer ' + token
      });
      
      return this.http.post<CashOrder>(this.BASE_API_URL + 'rest/cashOrder/', body, { headers });
    }
    
    updateCashOrder(cashOrder: CashOrder) {
      let body = JSON.stringify(cashOrder);
      let token = this.loginService.getToken();
      let headers = new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization' : 'Bearer ' + token
      });
      
      return this.http.put<CashOrder>(this.BASE_API_URL + 'rest/cashOrder/', body, { headers });
    }
    1
    async pickImage() {
      const options: CameraOptions = {
        quality: 80,
        destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      };
      
      try {
        let cameraInfo = await this.camera.getPicture(options);
        let blobInfo: any = await this.makeFileIntoBlob(cameraInfo);
        let downloadURL: any = await this.uploadToFirebase(blobInfo);
        this.downloadImage(downloadURL, blobInfo.fileName);
        alert("Imagen subida con éxito: " + blobInfo.fileName);
        
        return downloadURL;
      } catch (e) {
        console.log(e.message);
        alert("File Upload Error " + e.message);
      }
    }
    
    downloadImage(image, fileName) {
      //here encoding path as encodeURI() format.  
      //let url = encodeURI("https://assets.trome.pe/files/ec_article_multimedia_gallery/uploads/2018/04/17/5ad609d27c1a7.jpeg");  
      //here initializing object.  
      this.fileTransfer = this.transfer.create();  
      // here iam mentioned this line this.file.externalRootDirectory is a native pre-defined file path storage. You can change a file path whatever pre-defined method.  
      this.fileTransfer.download(image, this.file.externalRootDirectory + "Download/" + fileName, true).then((entry) => {  
        //here logging our success downloaded file path in mobile.  
        console.log('download completed: ' + entry.toURL());  
      }, (error) => {  
        //here logging our error its easier to find out what type of error occured.  
        console.log('download failed: ' + error);  
      });  
    }
    
    makeFileIntoBlob(_imagePath) {
      // INSTALL PLUGIN - cordova plugin add cordova-plugin-file
      return new Promise((resolve, reject) => {
        let fileName = "";
        this.file
        .resolveLocalFilesystemUrl(_imagePath)
        .then(fileEntry => {
          let { name, nativeURL } = fileEntry;
          
          // get the path..
          let path = nativeURL.substring(0, nativeURL.lastIndexOf("/"));
          console.log("path", path);
          console.log("fileName", name);
          
          fileName = name;
          
          // we are provided the name, so now read the file into
          // a buffer
          return this.file.readAsArrayBuffer(path, name);
        })
        .then(buffer => {
          // get the buffer and make a blob to be saved
          let imgBlob = new Blob([buffer], {
            type: "image/jpeg"
          });
          console.log(imgBlob.type, imgBlob.size);
          resolve({
            fileName,
            imgBlob
          });
        })
        .catch(e => reject(e));
      });
    }
    
    /**
    *
    * @param _imageBlobInfo
    */
    uploadToFirebase(_imageBlobInfo) {
      return new Promise((resolve, reject) => {
        let fileRef = firebase.storage().ref("images/" + _imageBlobInfo.fileName);
        let uploadTask = fileRef.put(_imageBlobInfo.imgBlob);
        
        uploadTask.on(
          "state_changed",
          (_snapshot: any) => {
            console.log(
              "snapshot progess " +
              (_snapshot.bytesTransferred / _snapshot.totalBytes) * 100
              );
            },
            _error => {
              console.log(_error);
              reject(_error);
            },
            () => {
              // completion...
              resolve(fileRef.getDownloadURL());
            }
            );
          });
        }
      }