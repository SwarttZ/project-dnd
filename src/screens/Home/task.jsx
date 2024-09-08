import { Draggable } from '@hello-pangea/dnd'
import {
    Span,
    ButtonRemover,
    ButtonFinish,
    ContainerTaskActions
} from './style'

export function Task({ task, index }) {
    return (
        <Draggable draggableId={String(task.id)} index={index}>
            {(provided) => (
                <ContainerTaskActions
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <Span>{task.name}</Span>
                    <ButtonRemover type="button">Remover</ButtonRemover>
                    <ButtonFinish type="button">Finalizar</ButtonFinish>
                </ContainerTaskActions>
            )}
        </Draggable>
    )
}