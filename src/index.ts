import app from "./app"
import buscaEstudantes from "./endpoints/estudantes/BuscarEstudantes"
import buscarEstudantePorId from "./endpoints/estudantes/buscarEstudantesPorId"
import novoEstudante from "./endpoints/estudantes/NovoEstudante"
import buscarHobbies from "./endpoints/hobbies/buscarHobbies"
import novoHobbie from "./endpoints/hobbies/novoHobbie"
import novaProfessora from "./endpoints/professores/novaProfessora"
import novaTurma from "./endpoints/turmas/novaTurma"

app.get("/estudantes",buscaEstudantes );//busca todos os estudantes
app.get("/hobbies", buscarHobbies);
app.get("/estudantes/:id", buscarEstudantePorId);//pegar idade pelo id

app.post("/estudantes", novoEstudante );//criar estudante
app.post("/hobbie", novoHobbie);
app.post("/professor", novaProfessora)//criar professor
app.post("/turma", novaTurma)//criar turma

app.put("/estudante/turma")//Adicionar estudante na turma;
app.put("/professor/turma")//Adicionar professor na turma;

/*→ Exibir estudantes de uma turma;

→ Exibir docentes de uma turma;

→ Exibir estudantes que possuam o mesmo hobby;

→ Remover estudante de uma turma;

→ Remover estudante;

→ Remover docente de uma turma;

→ Mudar turma de módulo*/

