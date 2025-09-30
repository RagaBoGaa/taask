import { Button } from './ui/button';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from './ui/alert-dialog';
import { useApp } from '../contexts/app-context';

interface DeleteDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
  count?: number;
}

export function DeleteDialog({
  open,
  onOpenChange,
  onConfirm,
  count = 1,
}: DeleteDialogProps) {
  const { t } = useApp();

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {count > 1 ? t.bulkDelete : t.deleteUser}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {count > 1
              ? `Are you sure you want to delete ${count} users? This action cannot be undone.`
              : 'Are you sure you want to delete this user? This action cannot be undone.'}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <Button variant='outline' onClick={() => onOpenChange(false)}>
            {t.cancel}
          </Button>
          <Button variant='destructive' onClick={onConfirm}>
            {t.delete}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
