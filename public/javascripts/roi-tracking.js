const RoiTracking = {
    init: function () {
      if (localStorage.get('roiUserID') == 'undefined')
      { 
        localStorage.set('roiUserID', Math.random() * 10);
      }
    }
}

export default RoiTracking;