function go_game(num)
{
    var img=document.getElementsByTagName("img");
    if(num==1)
    {
      img[0].setAttribute('src','red.png');
      img[1].setAttribute('src','gray.png');
      img[2].setAttribute('src','gray.png');
    }
    else if(num==2)
    {
        img[1].setAttribute('src','orange.png');
        img[0].setAttribute('src','gray.png');
        img[2].setAttribute('src','gray.png');
    }
    else if(num==3)
    {
        img[2].setAttribute('src','green.png');
        img[0].setAttribute('src','gray.png');
        img[1].setAttribute('src','gray.png');
    }
}
