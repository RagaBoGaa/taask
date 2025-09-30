import { useState } from 'react';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Checkbox } from '../components/ui/checkbox';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';
import { useApp } from '../contexts/app-context';
import { UserDialog } from '../components/user-dialog';
import { DeleteDialog } from '../components/delete-dialog';
import type { User } from '../types/user';
import { useKeyboardShortcuts } from '../hooks/use-keyboard-shortcuts';
import toast from 'react-hot-toast';

const initialUsers: User[] = [
  { id: '1', name: 'Alice Johnson', email: 'alice@example.com' },
  { id: '2', name: 'Bob Smith', email: 'bob@example.com' },
  { id: '3', name: 'Charlie Brown', email: 'charlie@example.com' },
  { id: '4', name: 'Diana Prince', email: 'diana@example.com' },
];

export default function UsersPage() {
  const { t } = useApp();
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [selectedUsers, setSelectedUsers] = useState<Set<string>>(new Set());
  const [userDialogOpen, setUserDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [deletingUserId, setDeletingUserId] = useState<string | null>(null);

  const handleSelectAll = () => {
    if (selectedUsers.size === users.length) {
      setSelectedUsers(new Set());
    } else {
      setSelectedUsers(new Set(users.map((u) => u.id)));
    }
  };

  const handleSelectUser = (userId: string) => {
    const newSelected = new Set(selectedUsers);
    if (newSelected.has(userId)) {
      newSelected.delete(userId);
    } else {
      newSelected.add(userId);
    }
    setSelectedUsers(newSelected);
  };

  const handleAddUser = () => {
    setEditingUser(null);
    setUserDialogOpen(true);
  };

  const handleEditUser = (user: User) => {
    setEditingUser(user);
    setUserDialogOpen(true);
  };

  const handleSaveUser = (userData: Omit<User, 'id'> & { id?: string }) => {
    if (userData.id) {
      setUsers(
        users.map((u) => (u.id === userData.id ? { ...u, ...userData } : u))
      );
      toast.success('The user has been successfully updated.');
    } else {
      const newUser: User = {
        id: Date.now().toString(),
        name: userData.name,
        email: userData.email,
      };
      setUsers([...users, newUser]);
      toast.success('The user has been successfully added.');
    }
  };

  const handleDeleteUser = (userId: string) => {
    setDeletingUserId(userId);
    setDeleteDialogOpen(true);
  };

  const handleBulkDelete = () => {
    if (selectedUsers.size === 0) return;
    setDeletingUserId(null);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (deletingUserId) {
      setUsers(users.filter((u) => u.id !== deletingUserId));
      toast.success('The user has been successfully deleted.');
    } else {
      setUsers(users.filter((u) => !selectedUsers.has(u.id)));
      setSelectedUsers(new Set());
      toast.success(
        `${selectedUsers.size} users have been successfully deleted.`
      );
    }
    setDeleteDialogOpen(false);
    setDeletingUserId(null);
  };

  useKeyboardShortcuts([
    {
      key: 'a',
      altKey: true,
      action: handleAddUser,
      description: 'Add new user',
    },
    {
      key: 'd',
      altKey: true,
      action: handleBulkDelete,
      description: 'Delete selected users',
    },
  ]);

  return (
    <div className='mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
      <div className='mb-8 flex items-center justify-between'>
        <div>
          <h1 className='text-3xl font-bold text-foreground'>{t.users}</h1>
          {selectedUsers.size > 0 && (
            <p className='mt-1 text-sm text-muted-foreground'>
              {selectedUsers.size} {t.selected}
            </p>
          )}
        </div>
        <div className='flex gap-2'>
          {selectedUsers.size > 0 && (
            <Button variant='destructive' onClick={handleBulkDelete}>
              <Trash2 className='mr-2 h-4 w-4' />
              {t.bulkDelete}
            </Button>
          )}
          <Button onClick={handleAddUser}>
            <Plus className='mr-2 h-4 w-4' />
            {t.addUser}
          </Button>
        </div>
      </div>

      <div className='rounded-lg border border-border bg-card'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className='w-12'>
                <Checkbox
                  checked={
                    selectedUsers.size === users.length && users.length > 0
                  }
                  onCheckedChange={handleSelectAll}
                  aria-label={t.selectAll}
                />
              </TableHead>
              <TableHead>{t.name}</TableHead>
              <TableHead>{t.email}</TableHead>
              <TableHead className='text-right'>{t.actions}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedUsers.has(user.id)}
                    onCheckedChange={() => handleSelectUser(user.id)}
                    aria-label={`Select ${user.name}`}
                  />
                </TableCell>
                <TableCell className='font-medium'>{user.name}</TableCell>
                <TableCell className='text-muted-foreground'>
                  {user.email}
                </TableCell>
                <TableCell className='text-right'>
                  <div className='flex justify-end gap-2'>
                    <Button
                      variant='ghost'
                      size='icon'
                      onClick={() => handleEditUser(user)}
                      aria-label={`${t.edit} ${user.name}`}
                    >
                      <Pencil className='h-4 w-4' />
                    </Button>
                    <Button
                      variant='ghost'
                      size='icon'
                      onClick={() => handleDeleteUser(user.id)}
                      aria-label={`${t.delete} ${user.name}`}
                    >
                      <Trash2 className='h-4 w-4 text-destructive' />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <UserDialog
        open={userDialogOpen}
        onOpenChange={setUserDialogOpen}
        user={editingUser}
        onSave={handleSaveUser}
      />

      <DeleteDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        onConfirm={confirmDelete}
        count={deletingUserId ? 1 : selectedUsers.size}
      />
    </div>
  );
}
