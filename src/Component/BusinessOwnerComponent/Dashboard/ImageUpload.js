import { Upload, Button, Spin } from "antd";
import React from "react";
import "antd/dist/antd.css";

export default function ImageUploader(){
    return(
        <div>
            <Upload.Dragger 
            multiple
            listType="picture"
             action= {"http://localhost:3000/"}
             showUploadList= {{showRemoveIcon :true}}
             accept = ".png,jpg,jpeg,pdf,.doc"
             beforeUpload={(file)=>{
                 console.log({file});
                 return false
             }}
             defaultFileList={[
                 {
                     uid:'abc',
                     name: "existing_file.png",
                     url: "https:/www.google.com"
                 }
             ]}
            iconRender={()=>{
                return <Spin></Spin>
            }}

             >
               Drag Files here OR 
               <br/>
                <Button> Click Upload</Button>

            </Upload.Dragger>

        </div>
    )
}