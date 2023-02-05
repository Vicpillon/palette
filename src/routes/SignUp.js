import React, { useState } from "react";

function SignUp () {
    const [name, setName] = useState(""); 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");


    const onNameHandler = (e) => {
        setName(e.currentTarget.value);
    };
    
    
    const onEmailHandler = (e) => {
        setEmail(e.currentTarget.value);
    };

    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value);
    };

    
    const onConfirmPasswordHandler = (e) => {
        setConfirmPassword(e.currentTarget.value);
    };
    
    const onPhoneNumberHandler = (e) => {
        setPhoneNumber(e.currentTarget.value);
    };

    const onAdressHandler = (e) => {
        setAddress(e.currentTarget.value);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(password !== confirmPassword){
            return alert ("비밀번호가 틀립니다. 다시 확인해주세요.");
        }
    }

    return (
        <div class="SignUp">
          <form>
              <div><input name="name" type="text" placeholder="이름" value={name} onChange={onNameHandler} class="loginregister__input"/></div>
              <div><input name="email" type="email" placeholder="이메일" value={email} onChange={onEmailHandler} class="loginregister__input"/></div>
              <div><input name="password" type="password" placeholder="비밀번호" value={password} onChange={onPasswordHandler} class="loginregister__input"/></div>
              <div><input name="confirmPassword" type="password" placeholder="비밀번호 확인" value={confirmPassword} onChange={onConfirmPasswordHandler} class="loginregister__input"/></div>
              <div><input name="email" type="phonenumber" placeholder="휴대폰번호" value={phoneNumber} onChange={onPhoneNumberHandler} class="loginregister__input"/></div>
              <div><input name="email" type="address" placeholder="주소" value={address} onChange={onAdressHandler} class="loginregister__input"/></div>

              <div><button type="submit" onSubmit={onSubmitHandler} class="signUp_button">계정 생성하기</button></div>
          </form>
        </div>
    );
}
export default SignUp;



