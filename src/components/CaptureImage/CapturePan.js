import React, { useState } from 'react'
import { useRef,useCallback,useEffect } from 'react'
import { Requests } from '../../utils/Index'
import Webcam from "react-webcam"
import { connect } from 'react-redux'
import Bloader from '../ButtonLoader/Bloader'


const videoContraints = {
    width:300,
    height:150,
    facingMode:"user"
}

function dataURLtoFile(dataurl, filename) {
  var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
  while(n--){
      u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, {type:mime});
}

const CaptureImage =(props)=> {
  console.log(props)
    const webcamRef = useRef(null)
    const [loading,setLoading] = useState(false);
    const [image,setImage] = useState(null);
    const capture = useCallback(
      () => {
        const imagesrc = webcamRef.current.getScreenshot();
        console.log(imagesrc)
        setImage(imagesrc)
      },
      [webcamRef],
    )
  
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      var formData = new FormData();
      let obj = dataURLtoFile(image,"img")
      console.log(obj)
      formData.append("file",obj);
      formData.append("email",props.userData.email);
      try {
        Requests.uploadPan(formData);
      } catch (e) {
        console.log(e);
      }
    };
   
      
  return (
    <>
    {
      image?
      (
        <div className="flex flex-col justify-center my-20">
          <img src={image} className="m-auto"></img>
          <div className="flex items-baseline justify-center py-3">
              <button
                className="webcampCapture_button shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                type="button"
                onClick={handleSubmit}
              >
                {loading ? (<Bloader />) :("Uplaod")}
              </button>
            </div>
        </div>
      ):
      (
        <div className="webcamCapture flex flex-col justify-center my-20">
        <Webcam
         audio={false}
         width={videoContraints.width}
         height={videoContraints.height}
         ref={webcamRef}
         screenshotFormat="image/png"
         width={videoContraints.width}
         videoConstraints={videoContraints}
         className="m-auto"
         >
        </Webcam>
        <div className="flex items-baseline justify-center py-3">
              <button
                className="webcampCapture_button shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                type="button"
                onClick={capture}
              >
                click
              </button>
            </div>
    </div>
      )
    }
    </>
  
  )
}

function mapStateToProps(state) {
  console.log(state)
  return {
    isAuthenticated: state.isAuthenticated,
    userData:state.userData
  };
}
function mapActionToProps(dispatch) {
  return {
    
  };
}

export default connect(mapStateToProps, mapActionToProps)(CaptureImage);