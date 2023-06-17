import React from "react";
import Title from "./Title";
import Label from "./Label";
import Input from "./Input";
import Dropdown from "./Dropdown";
import Textbox from "./Textbox";
import DropdownPhone from "./DropdownPhone";
import Button from "./button";
const Form = () => {
  //DROPDOWN DATA

  const level = ["Nivel de ingles", "A1", "A2", "B1", "B2", "C1", "C2"];
  const exp = ["lavanderia ", "otro"];
  const workPlace = ["Donde quiere trabajar?", "Estados Unidos", " Canadá"];

  //END DROPDOWN DATA
  return (
    <div className='bg-slate-300 rounded mb-1 container  m-auto  p-5'>
      {/*  <form>
      </form> */}

      <Title size="1" text="Formulario"/>
      <form>
        <div className='grid gap-6 mb-6 md:grid-cols-2'>
          <div>
            <Label label='Nombre' id='name' />
            <Input id='name' />
          </div>
          <div>
            <Label label='Apellido' id='last-name' />
            <Input id='last-name' />
          </div>

          <div>
            <Label label='Nivel de ingles' id='level' />
            <Dropdown name='level' options={level} />
          </div>
          <div>
            <Label label='Número Telefónico' id='level' />
            <DropdownPhone />
          </div>
          <div>
            <Label label='Area de experiencia ' id='level' />

            <Dropdown options={exp} />
          </div>
          <div>
          <Label label='Lugar de trabajo ' id='level' />
          <Dropdown options={workPlace} />
          </div>

        </div>
        <Label label='¿Cúal es tu pasatiempo favorito? ' id='level' />
        <Textbox />
        <div></div>
        <Button value='Enviar' type='submit' />
      </form>
    </div>
  );
};

export default Form;
