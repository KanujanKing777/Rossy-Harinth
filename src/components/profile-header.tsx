import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import type { UserProfile } from '@/lib/data';

interface ProfileHeaderProps {
  user: UserProfile;
}

export default function ProfileHeader({ user }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center py-8 md:py-12 text-center">
      <Avatar className="w-24 h-24 md:w-32 md:h-32 border-4 border-primary shadow-lg">
        <AvatarImage src={user.profileImageUrl} alt={`${user.name}'s profile picture`} data-ai-hint={user.profileImageHint} />
        <AvatarFallback>{user.name.substring(0, 1).toUpperCase()}</AvatarFallback>
      </Avatar>
      <h1 className="mt-4 text-3xl md:text-4xl font-headline text-foreground">
        {user.name}
      </h1>
    </header>
  );
}
