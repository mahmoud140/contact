function count_me(tag,obj)
{
    var tag_name=document.getElementsByTagName(tag);
    var clas=document.getElementsByClassName(obj.class);
    var nam=document.getElementsByName(obj.name);
    var id1=document.getElementById(obj.id);
    var obj2//=[];
    //tag_name=document.getElementsByTagName(tag);
    var all,id,cla,name1;
    all=tag_name.length;
    cla=clas.length;
    name1=nam.length;
    for(var i=0;i<tag_name.length;i++)
    {
        //console.log(id1);
       //console.log(nam);
        if(id1!=null)
        {
            var boolean="true";
        }
        else
        {
            boolean="false";
        }
    }
   obj2={all:all ,Class:cla ,id: boolean ,Name:name1 };
    console.log(obj2);
}