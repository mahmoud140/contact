function my_family(name)
{
    var tag=document.getElementsByTagName(name)
    var obj=[];
    var j;
    var s=[];
    for(var i=0;i<tag.length;i++)
    {
       var a=tag[i];
       var c=a.children;
       var p=a.parentNode;
       var ch=p.children;
       for(j=0;j<ch.length;j++)
       {
           if(ch[j]!=name)
           {
               s=ch[j];
           }
       }
       obj[i]={parent:p,children:c,sibling:s};
    }
    console.log(obj);
}