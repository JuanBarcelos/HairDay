import dayjs from "dayjs";
import { scheduleNew } from "../../services/schedule-new";
import { schedulesDay } from "../schedules/load.js";

const form = document.querySelector("form");
const selectedDate = document.getElementById("date");
const clientName = document.getElementById("client");

//Data atual formatada para o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

//carregar a data atual e limitar usando a data minima 
selectedDate.value = inputToday;
selectedDate.min = inputToday;

form.onsubmit = async (event) => {
  event.preventDefault();
  try {
    const name = clientName.value.trim();
    const hourSelected = document.querySelector(".hour-selected");

    if(!name || !hourSelected) {
      return alert("Nome do Cliente ou horário não informado")
    }

    const [hour] = hourSelected.innerText.split(":");
    const when = dayjs(selectedDate.value).add(hour, "hour");
    const id = new Date().getTime();

    await scheduleNew({
      id,
      name,
      when
    })

    //Recarregar os agendamentos
    await schedulesDay();

    clientName.value = "";

  } catch (error) {
    alert("Não foi possível realizar o agendamento");
    console.log(error)
  }
}