import {useState} from 'react';
import style from './form.module.css';
import { Button } from '../Button/button.jsx';
import { IoMdMail } from "react-icons/io";
import { MdChat, MdOutlineCall } from "react-icons/md";
import Side_image from "../../assets/form.svg";

export const Form = () => {
  const[name , setName] = useState("Riya");
  const[email , setEmail] = useState("riya@eaxample.com");
  const[text , setText] = useState("Hello , I am Interested in your services . Please contact me.");
  
  const onViaCall = () => {
    console.log("I am from Via Call");
  };

  const OnSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
    console.log(name , email , text);
   };

  return (
    <div className={style.content}>
      <div className={style.form_section}>
 {/* buttons */}
        <div className={style.btn_section}>
          <div className={style.topbtn}>
            <Button icon={<MdChat size={24} />} text="Via Mobile chat" />
            <Button
              onClick={onViaCall}
              text="Via Call"
              icon={<MdOutlineCall size={24} />}
            />
          </div>
          <div className={style.bottombtn}>
            <Button
              isOutline={true}
              icon={<IoMdMail size={24} />}
              text="Via Email"
            />
          </div>
        </div>

        {/*  Single Form */}
        <form onSubmit={OnSubmit}>
          <div className={style.in_forms}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={style.in_forms}>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" />
          </div>
          <div className={style.in_forms}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8" />
          </div>

          <div style={{ display: "flex", justifyContent: "end" }}>
            {/* Button with type="submit" so form triggers OnSubmit */}
            <Button type="submit" text="Submit" />
          </div>
          <div > {name} <br /> {email} <br /> {text}</div>
        </form>
      </div>

      <div className={style.form_image}>
        <img src={Side_image} alt="img" />
      </div>
    </div>
  );
};
