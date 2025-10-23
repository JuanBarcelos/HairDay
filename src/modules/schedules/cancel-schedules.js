import { schedulesCancel } from "../../services/schedule-delete";
import { schedulesDay } from "../schedules/load.js"

const periods = document.querySelectorAll(".period");

periods.forEach((period) =>{
  //Captura o evento de clique na lista
  period.addEventListener("click", async (event) => {
    if(event.target.classList.contains("cancel-icon")){
      //obtém a li pai do elemento clicado
      const item = event.target.closest("li");
      //pegar o id do agendamento para remover
      const { id } = item.dataset;

      if(id){
        const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento")
        
        if(isConfirm){
          await schedulesCancel({id});
          schedulesDay();
        }
      }
    }
  })
})