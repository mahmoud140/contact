function  stylish (name,obj)
{
    var p=document.getElementsByTagName(name);
    for(var i=0;i<p.length;i++)
    {
        p[i].style.color=obj.color;
        p[i].style.background=obj.background;
    }
}