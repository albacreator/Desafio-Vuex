<template>
  <div class="container">
    <h1>Tienda de Juegos 32 Bits</h1>

    <h2>Lista de Juegos</h2>
    <table>
      <thead>
        <tr>
          <th>Código</th>
          <th>Nombre</th>
          <th>Stock</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="juego in juegos" :key="juego.codigo">
          <td>{{ juego.codigo }}</td>
          <td>{{ juego.nombre }}</td>
          <td>{{ juego.stock }}</td>
          <td>{{ parseFloat(juego.precio).toLocaleString() }} €</td>
          <td>
            <button @click="changeStock({ codigo: juego.codigo, action: 'restar' })" >-</button>
              <button @click="changeStock({ codigo: juego.codigo, action: 'sumar' })">+</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['juegos'])
  },
  methods: {
    reducirStock(codigo, cantidad) {
      this.$store.dispatch('modificarStock', { codigo, cantidad });
    }
  },
  created() {
    this.$store.dispatch('fetchJuegos');
  }
}
</script>

<style>
.container {
  padding: 20px;
  max-width: 800px;
  margin: auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
}
h2{
  text-align: center;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  padding: 10px;
  border: 1px solid #ccc;
  text-align: left;
}

th {
  background-color: #f4f4f4;
}

tr:hover {
  background-color: #f9f9f9;
}

button {
  background-color: #cf1ca2;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #860976;
}
</style>
