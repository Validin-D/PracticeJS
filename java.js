
console.log("here")
const supabaseUrl = "https://xsgtgcajktmyhnqdvmwx.supabase.co"
const supabaseAnonKey = 'sb_publishable_VjafgC6r-CHMwFqUP2bU0A_1M0X-XZI ' 
// Truy cập trực tiếp qua hàm global do CDN cung cấp
 const supabaseCilent = window.supabase.createClient(supabaseUrl, supabaseAnonKey); 
// Đăng ký tài khoản cho người dùng
const submitbutton = document.getElementById("submitIn4")
// Chuyen du lieu len database (auth)
submitbutton.addEventListener("click", async (e)=>{
    e.preventDefault(); 
    const Subname = document.getElementById("username").value; 
    const Subemail = document.getElementById("email").value ;
    const Subpassword = document.getElementById("password").value;
        console.log(Subname)
        console.log(Subemail)
        console.log(Subpassword)
    const {data, error}= await supabaseCilent.auth.signUp({
        email: Subemail, 
        password: Subpassword,
        options: {
            data: {
                name: Subname
            }
        }
    })

      if(error){
        alert("Đăng ký không thành công")
    }
    else{
        alert("Đăng ký thành công")
    } 
}); 

 




