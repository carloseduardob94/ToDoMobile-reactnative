import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Svg, { Path } from 'react-native-svg'

import { styles } from './styles'
import { useState } from 'react'
import { Task } from '../../components/Tasks'



export const Home = () => {
  const [tasks, setTasks] = useState<string[]>([])
  const [taskName, setTaskName] = useState<string>('')
  const [countTask, setCountTask] = useState<number>(0)
  const [completedTask, setCompletedTask] = useState<number>(0)

  const handleAddTask = () => {
    if (tasks.includes(taskName)) {
      return Alert.alert("Task já criada.", "Task com essa descrição já foi cadastrada na lista.")
    }

    setTasks(prevState => [...prevState, taskName])
    setTaskName('')
    setCountTask(prevState => prevState + 1)
  }

  const handleDeleteTask = (taskName: string) => {
    Alert.alert("Excluir", `Deseja excluir a task ${taskName}`, [
      {
        text: 'Sim',
        onPress: () => {
          Alert.alert("Task excluida com sucesso.")
          const filterTask = tasks.filter(task => task !== taskName)

          setTasks(filterTask)
          setCountTask(prevState => prevState + -1)
        }
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  const handleToggleTask = (isChecked: boolean) => {
    if (isChecked) {
      setCompletedTask(prevState => prevState + 1)
    } else {
      setCompletedTask(prevState => prevState - 1)
    }
  }


  return (
    <>
      <View style={styles.header}>
        <Image source={require("../../../assets/logo-to-do.png")} style={{ width: 110, height: 32 }} />
      </View>
      <View style={styles.main}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholderTextColor="#808080"
            placeholder='Adicione uma nova tarefa'
            value={taskName}
            onChangeText={setTaskName}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={handleAddTask}
          >
            <Svg width={16} height={16}>
              <Path d="M7.98373 1.45158C9.27565 1.45158 10.5386 1.83468 11.6128 2.55244C12.687 3.27019 13.5242 4.29037 14.0186 5.48395C14.513 6.67754 14.6424 7.99092 14.3903 9.25802C14.1383 10.5251 13.5161 11.689 12.6026 12.6026C11.6891 13.5161 10.5252 14.1382 9.25807 14.3903C7.99097 14.6423 6.67759 14.5129 5.484 14.0185C4.29042 13.5241 3.27025 12.6869 2.55249 11.6127C1.83473 10.5385 1.45163 9.2756 1.45163 7.98368C1.45832 6.25332 2.14867 4.59574 3.37223 3.37218C4.59579 2.14862 6.25337 1.45827 7.98373 1.45158ZM7.98373 5.77648e-06C6.40611 0.00645971 4.86578 0.480174 3.55717 1.36134C2.24857 2.24252 1.23037 3.49164 0.631106 4.95102C0.031846 6.4104 -0.121605 8.01461 0.190125 9.56114C0.501855 11.1077 1.26479 12.5272 2.38262 13.6404C3.50044 14.7537 4.92304 15.5108 6.47082 15.8162C8.01861 16.1217 9.62218 15.9617 11.0791 15.3564C12.536 14.7512 13.781 13.7279 14.6568 12.4158C15.5326 11.1036 16 9.5613 16.0001 7.98368C16.0001 6.93249 15.7925 5.89165 15.3892 4.92089C14.986 3.95014 14.395 3.06857 13.6502 2.32679C12.9053 1.58501 12.0214 0.997618 11.049 0.598327C10.0766 0.199035 9.0349 -0.00429452 7.98373 5.77648e-06Z" fill="#FFF" />
              <Path d="M11.707 7.38129H8.4954V4.16968H7.41397V7.38129H4.19873V8.46271H7.41397V11.6743H8.4954V8.46271H11.707V7.38129Z" fill="#F2F2F2" />
            </Svg>
          </TouchableOpacity>
        </View>

        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginTop: 32, paddingRight: 12, marginBottom: 20 }} >
          <View style={{ width: 87, gap: 8, flexDirection: 'row' }}>
            <Text style={{ fontSize: 14, fontFamily: 'Inter_700Bold', color: '#4EA8DE' }}>Criadas</Text>
            <View style={{ width: 25, height: 19, borderRadius: 999, backgroundColor: '#333333', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 14, fontFamily: 'Inter_700Bold', color: '#D9D9D9' }}>{countTask}</Text>
            </View>
          </View>

          <View style={{ width: 87, gap: 8, flexDirection: 'row' }}>
            <Text style={{ fontSize: 14, fontFamily: 'Inter_700Bold', color: '#8284FA' }}>Concluídas</Text>
            <View style={{ width: 25, height: 19, borderRadius: 999, backgroundColor: '#333333', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 14, fontFamily: 'Inter_700Bold', color: '#D9D9D9' }}>{completedTask}</Text>
            </View>
          </View>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={item => item}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Task
              key={item}
              description={item}
              onRemove={() => handleDeleteTask(item)}
              onToggleTask={handleToggleTask}
              isChecked
            />
          )}
          ListEmptyComponent={() => (
            <View style={{ width: '100%', height: 208, alignItems: 'center', justifyContent: 'center', borderTopWidth: 1, borderColor: '#333333' }}>
              <Image source={require("../../../assets/Clipboard.png")} width={56} height={56} />
              <Text style={{ fontSize: 14, fontFamily: 'Inter_700Bold', color: '#808080', marginTop: 16 }} >Você ainda não tem tarefas cadastradas</Text>
              <Text style={{ fontSize: 14, fontFamily: 'Inter_400Regular', color: '#808080' }} >Crie tarefas e organize seus itens a fazer</Text>
            </View>
          )}
        />
      </View>
    </>
  )
}