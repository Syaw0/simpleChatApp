const uploadImg = (uploadedImg, upPath) => new Promise((res) => {
  uploadedImg.mv(upPath, (err) => {
    if (err) {
      res({ status: false, msg: 'error durring uploadImg' });
    } else {
      res({ status: true, msg: 'succussfully uploadimg' });
    }
  });
});
module.exports = uploadImg;
