import React, { useState } from 'react'
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd'
import { Task } from './task';

import {
    Container,
    Input,
    ButtonSubmit,
    Form,
    ContainerTasks,
    ContainerForm,
} from './style'

const Home = () => {
    const [newTask, setNewTask] = useState("");

    const [tasks, setTasks] = useState([
        {
            id: 0,
            name: "Comprar refrigerante pro almoço papitos"
        },
        {
            id: 1,
            name: "Fazer o almoço"
        },
        {
            id: 2,
            name: "Teste de task"
        }
    ]);

    const handleAddTask = (event) => {
        event.preventDefault();

        if (newTask === "") return;

        let newItem = {
            id: `${tasks.length + 1}`,
            name: newTask
        }

        setTasks(allTasks => [...allTasks, newItem])

        setNewTask("")
    }

    const removeTask = (id) => {
        setTasks(allTasks => allTasks.filter((task) => task.id !== id));
    }

    const reOrder = (list, startIndex, endIndex) => {
        const result = Array.from(list)
        const [removed] = result.splice(startIndex, 1)
        result.splice(endIndex, 0, removed)

        return result;
    }

    function onDragEnd(result) {
        if (!result.destination) {
            return;
        }

        const items = reOrder(tasks, result.source.index, result.destination.index)
        setTasks(items);
    }

    return (
        <Container>
            <h1>Tarefas</h1>
            <ContainerForm>
                <Form onSubmit={handleAddTask}>
                    <div><Input type='text'
                        value={newTask}
                        onChange={(event) => setNewTask(event.target.value)}
                    /></div>
                    <div><ButtonSubmit type="submit">Adicionar</ButtonSubmit></div>
                </Form>
            </ContainerForm>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId='tasks' type='list' direction='vertical'>
                    {(provided) => (
                        <ContainerTasks
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {tasks.map((task, index) => (
                                <Task
                                    key={task.id}
                                    task={task}
                                    index={index}
                                    onRemove={() => removeTask(task.id)} />
                            ))}
                            {provided.placeholder}
                        </ContainerTasks>
                    )}
                </Droppable>
            </DragDropContext>
        </Container>
    )
}

export default Home;