import React, { useEffect, useState } from 'react';
import { List, Checkbox, Button, Input, Select, Spin } from 'antd';
import { DeleteOutlined, EditOutlined, CloseOutlined, CheckOutlined, LoadingOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { fetchInitialTasks, toggleTask, editTask, deleteTask, setUserForTask } from '../../store/tasksSlice';
import { fetchUsers } from '../../store/usersSlice';
const { Option } = Select;

function TaskList() {
  const [editText, setEditText] = useState('');
  const [editMode, setEditMode] = useState(null);
  const [selectedUsers, setSelectedUsers] = useState({});

  const dispatch = useDispatch();
  const { tasks, isLoading } = useSelector((state) => state.tasks);
  const { users } = useSelector((state) => state.users);

  
  useEffect(() => {
    dispatch(fetchInitialTasks());
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleToggle = (id) => {
    dispatch(toggleTask(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleEdit = (id, text) => {
    setEditMode(id);
    setEditText(text);
  };

  const saveEdit = (taskId, newText) => {
    dispatch(editTask({ id: taskId, text: newText }));
    setEditMode(null);
  };

  const handleUserChange = (taskId, userId) => {
    setSelectedUsers({
      ...selectedUsers,
      [taskId]: userId,
    });
    dispatch(setUserForTask({ taskId, user: users.find(a => a.id === userId) }));
  };

  const sortedTasks = [...tasks].sort((a, b) =>
    a.completed === b.completed ? 0 : a.completed ? 1 : -1
  );

  return (
    <div>
      {sortedTasks.length !== 0 && (
        <>
          <List
            dataSource={sortedTasks}
            className={isLoading ? 'loading' : ''}
            renderItem={(task) => (
              <List.Item
                className={task.completed ? 'completed' : ''}
                actions={[
                  editMode === task.id ? (
                    <div>
                      <Button
                        size='small'
                        type="primary"
                        icon={<CheckOutlined />}
                        onClick={() => saveEdit(task.id, editText)}
                      />
                      <Button
                        size='small'
                        icon={<CloseOutlined />}
                        onClick={() => handleEdit(null)}
                      />
                    </div>
                  ) : (
                    <div>
                      <Button
                        size='small'
                        icon={<EditOutlined />}
                        onClick={() => handleEdit(task.id, task.text)}
                        disabled={task.completed}
                      />
                      <Button
                        size='small'
                        danger
                        icon={<DeleteOutlined />}
                        onClick={() => handleDelete(task.id)}
                      />
                    </div>
                  )
                ]}
              >
                {editMode === task.id ? (
                  <>
                    <Checkbox disabled />
                    <Input
                      size="default"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                    />
                  </>
                ) : (
                  <>
                    <Checkbox
                      onChange={() => handleToggle(task.id)}
                      checked={task.completed}
                    />
                    <div className='task-info'>
                    <span>{task.text}</span>
                      <Select
                        disabled={task.completed}
                        placeholder = "Assign to"
                        value = {selectedUsers[task.id] ? selectedUsers[task.id] : task.assignedUser.id}
                        size = {'small'}
                        onChange={(value) => handleUserChange(task.id, value)}
                      >
                        {users.map((user) => (
                          <Option key={user.id} value={user.id}>
                            <img src={user.avatar} alt={user.name}/>
                            {user.name}
                          </Option>
                        ))}
                      </Select>
                    </div>
                  </>
                )}
              </List.Item>
            )}
          />
          {isLoading === true && (
            <Spin indicator={<LoadingOutlined />} />
          )}
        </>
      )}
    </div>
  );
}

export default TaskList;
