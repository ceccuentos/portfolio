import React, {useState, useRef} from "react"
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form";


const Contacts = () => {

    const [successMessage, setSuccessMessage] = useState("");
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const form = useRef();
    console.log(watch("example"));

    const serviceID = "service_4piwo6t";
    const templateID = "template_wgw60da"
    const publicKey = "Ez8FwrSHSa4lYbdvm"
    
    const onSubmit = (data, r) => {
        sendEmail(
        serviceID,
        templateID,
        {
            name: data.name,
            phone: data.phone,
            email: data.email,
            subject: data.subject,
            description: data.description
        },
        publicKey
        )
        r.target.reset();
    }


    const sendEmail = (serviceID, templateID, variables, publicKey) => {

    emailjs.send(serviceID, templateID, variables, publicKey)
    .then((result) => {
        setSuccessMessage("Formulario enviado correctamente!");
    }).catch(err => console.error(`Algo salió mal ${err}`));
    }

    return (  
    <div className="contacts">
        <div className="text-center">
            <h1>contacto</h1>  
            <p>Por favor llene el formulario con sus datos, lo contactaré lo antes posible.</p>
            <span className="success-message">{successMessage}</span>
        </div>
        <div className="container">
        {/* <form ref={form} onSubmit={sendEmail}> */}
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
            <div className="col-md-6 col-xs-12">
                {/* Name input */}
                <div className="text-center">
                    <input 
                    type="text"
                    className="form-control"
                    placeholder="Nombre"
                    name="name"
                    {...register("name", { 
                        required: true,
                        maxLength: 40,
                        pattern: /^[A-Za-z]+$/i
                    })}
                    />
                    <div className="line"></div>
                    {errors.name && <span className="error-message">Nombre es requerido máx 40 carácteres</span>}
                </div>

                {/* Telefono input */}
                <div className="text-center">
                    <input 
                    type="text"
                    className="form-control"
                    placeholder="Teléfono"
                    name="phone"
                    {...register("phone", { 
                        required: true,
                        pattern: /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i
                    })}
                    />
                    <div className="line"></div>
                    {errors.phone && <span className="error-message">El fono es requerido o no es válido</span>}
                </div>
                {/* Email input */}
                <div className="text-center">
                    <input 
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    {...register("email", { 
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                    })}
                    />
                    <div className="line"></div>
                    {errors.email && <span className="error-message">El Email es requerido o no es válido</span>}
                </div>
                 {/* Asunto input */}
                 <div className="text-center">
                    <input 
                    type="text"
                    className="form-control"
                    placeholder="Asunto"
                    name="subject"
                    {...register("subject", { 
                        required: true
                    })}
                    />
                    <div className="line"></div>
                    {errors.subject && <span className="error-message">Me parece que olvidaste la descripción</span>}
                </div>
            </div>
            <div className="col-md-6 col-xs-12">
                {/* Descipcion input */}
                <div className="text-center">
                    <textarea
                        type="text"
                        className="form-control"
                        placeholder="Describa brevemente el tema de contacto"
                        name="description"
                        {...register("description", { 
                            required: true
                        })}
                    />
                    <div className="line"></div>
                    {errors.description && <span className="error-message">Me puedes dar una descripción breve de lo que necesitas...</span>}
                </div>
                <button className="btn-main-offer contact-btn" type="submit">Enviar</button>
            </div>
            </div>
            </form>
        </div>
    </div>
  )
}

export default Contacts