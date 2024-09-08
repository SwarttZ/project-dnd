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

    const tasks = [
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
    ]

    const handleTask = (event) => {

    }

    function onDragEnd(result) {
        console.log(result.destination.index, result.source.index)
    }

    return (
        <Container>
            <h1>Tarefas</h1>
            <ContainerForm>
                <Form action="#">
                    <div><Input type='text' /></div>
                    <div><ButtonSubmit>Adicionar</ButtonSubmit></div>
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
                                <Task key={task.id} task={task} index={index} />
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