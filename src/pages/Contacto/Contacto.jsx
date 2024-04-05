import "./contacto.css"
const Contacto = () => {
  return (
    <section className='contacto' id='contacto'>
      <form
        className='form'
        action='https://formsubmit.co/fastcodee@gmail.com'
        method='POST'
      >
        <div className='form__div'>
          <div className='input'>
            <label>Nombre</label>
            <input type='text' name='name' required className='form__input' />
          </div>
          <div className='input'>
            <label>Email</label>
            <input type='mail' name='email' required className='form__input' />
          </div>
        </div>
        <div className='input textarea-contenedor'>
          <label>Mensaje</label>
          <textarea className='textarea' name='textarea' required />
        </div>
        <div className='button-contenedor'>
          <button type='submit' className='form__button'>
            Enviar
          </button>
        </div>
      </form>
      <div className='contacto-text'>
        <h5 className='contacto-text__h5'>Ponete en contacto</h5>
        <p className='contacto-text__p'>
          Envianos un mensaje y te responderemos lo antes posible
        </p>
      </div>
    </section>
  )
}
export { Contacto }
