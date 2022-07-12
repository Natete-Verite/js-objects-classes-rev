function reverse(){
    let a=[1,2,3,4,5];
    if (a.length>1) {
        var start = 0;
        var end = a.length-1;
        while (start<end) {
            [a[start],a[end]=a[end],a[start]]
            start++;
            end--;
        }
    }
    return null
}