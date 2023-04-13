
let seq1=(s,t)=>{
    s=s.split('').sort().join('');
      t=t.split('').sort().join('');
      return s===t;
}
let seq2=(s,t)=>{
    let sum={};
    for(let i=0;i<s.length;i++)
    {
        let char=s[i];
        if(char in sum)
        {
            sum[char]++
        }
        else
        {
            sum[char]=1;
        }
    }
      for(let i=0;i<t.length;i++)
    {
        let char=t[i];
        if(char in sum)
        {
            sum[char]--;
        }
        else
        {
            return false;
        }
    }
    for(let key in sum)
    {
        if(sum[key])
        {
            return false;
        }
    }
    return true;
}
console.log(seq2('abcdef','abcdgh'));