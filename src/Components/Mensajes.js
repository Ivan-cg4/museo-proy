import React from 'react'

export const Mensajes = () => {
    
    return (
    <section className="princ">
        <div className="fas" style={{width:"70%", marginTop:20, background:"transparent",padding:20}}>
            <form id="miFormulario">
                <h1 className="cont"> ¿Que opinas de la pagina?</h1>
                <input className="form-control  form-control-lg" type="text" placeholder="digite su nombre"/>
                <input className="form-control  form-control-lg" type="email"placeholder="digite su correo"/>
                <textarea className="form-control form-control-lg"placeholder="Digite su mensaje">

                </textarea>
                <button className="dor">
                    Enviar mensaje
                </button>
            </form>
        </div>
    </section>
  )
}
