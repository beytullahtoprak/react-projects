import React from 'react'

export const users = [
    {
        'name': 'deneme',
        'surname': 'deneme2'
    },
    {
        'name': 'deneme2',
        'surname': 'deneme3'
    } 
]

function Login() {
  return (
    <>
        <div>
            <p>Kullanıcı Adı</p>
            <input type="text" name="" id="" />
        </div>

        <div>
            <p>Şifreniz</p>
            <input type="text" name="" id="" />
        </div>

        <div>
            <button>Giriş Yap</button>
        </div>
        
    </>
  )
}

export default Login