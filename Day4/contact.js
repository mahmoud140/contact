var contact =function (name,email,phone) {
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)))
    {
        console.log('invalid email')
    }
}