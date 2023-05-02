function find(arr) {
    if (arr.length < 2) {
        return undefined;
    }

    let min3 = Infinity;
    let min5 = Infinity;
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min3) {
        min5 = min3;
        min3 = arr[i];
      } else if (arr[i] < min5 && arr[i] !== min3) {
        min5 = arr[i];
      }
    }
    
    return [min3, min5];
}