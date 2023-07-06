(function RoiTracking(window) {

  const array = new Uint32Array(1);

  

  if (!localStorage.getItem('roiUserID'))
  { 
    localStorage.setItem('roiUserID', self.crypto.getRandomValues(array));
  }


})(window);