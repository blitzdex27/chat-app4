class Secretary {
  get = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  constructor(fEDataState, setFEDataState, bEGetReqtUrl, bEPostReqUrl) {
    this.fEDataState = fEDataState;
    this.setFEDataState = setFEDataState;
    this.bEGetReqtUrl = bEGetReqtUrl;
    this.bEPostReqUrl = bEPostReqUrl;
  }
  checkDataDiff() {
    let bEDataState;
    const getDataFromServer = async () => {
      const url = this.bEGetReqtUrl;
      const response = await fetch(url, get);
      const json = await response.json();
      bEDataState = json;
    };

    if (this.fEDataState === bEDataState) {
      return true;
    }
    return false;
  }
  
}
