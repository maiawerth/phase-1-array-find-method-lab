function superbowlWin(record) {
    const winObject = record.find(obj => obj.result === "W");
  
    if (winObject) {
      return winObject.year;
    } else {
      return undefined;
    }
  }