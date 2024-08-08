# PASTELERÍA JEANPIERRE: PARA COMPARTIR CON TUS SERES QUERIDOS

### Notas:

- debo meterme mas en lo que es el tipado con typescript: Perdí mucho tiempo en algunas ocasiones

### test: Componente Services, renderiza segun el tipo de producto, mediante el atributo "type"

```javascript
<section className="flex flex-col gap-9">
  <div className="bg-red-500 p-12">
    <h1 className="text-green-500">SECCION 1</h1>
    <Services type="PARA MOSTRAR" />
  </div>

  <div className="bg-green-500 p-12">
    <h1 className="text-white">SECCION 2</h1>
    <Services type="PARA COMPRAR" />
  </div>
</section>
```
