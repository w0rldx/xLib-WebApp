import { Avatar, Badge, Button, Card, Group, Image, Text } from '@mantine/core';
import { useAuthStore } from '../stores/AuthStore';
import { useStyles } from '../styles/components/UserCardStyle';

interface UserCardProps {
    userName: string;
    avatar?: string;
    fistName: string;
    lastName: string;
    email: string;
    roles: string[];
    headerPicture?: string;
}

function UserCard(props: UserCardProps) {
    const { classes } = useStyles();
    const [user] = useAuthStore((state) => [state.getUser()]);

    const userAvatar = () => {
        if (props.avatar === '') {
            return <Avatar className={classes.avatar} size={150} radius="xl" />;
        } else {
            return (
                <Avatar
                    className={classes.avatar}
                    size={150}
                    radius="xl"
                    src={props.avatar}
                />
            );
        }
    };

    const userNameWithBadge = () => {
        if (props.roles?.length > 0) {
            return (
                <Group position="apart" mt="md" mb="xs">
                    <Text weight={500}>{props.userName}</Text>
                    <Badge color="pink" variant="light">
                        On Sale
                    </Badge>
                </Group>
            );
        }
    };

    const addAsFriendButton = () => {
        if (props.userName !== user?.username) {
            return <Button>Add as Friend</Button>;
        } else {
            return <></>;
        }
    };
    const editProfileButton = () => {
        if (props.userName === user?.username) {
            return <Button>Edit Profile</Button>;
        } else {
            return <></>;
        }
    };

    return (
        <Card shadow="sm" p="lg" radius="md" withBorder>
            <Card.Section>
                <Image
                    src={
                        props.headerPicture === ''
                            ? 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80'
                            : props.headerPicture
                    }
                    height={300}
                />
            </Card.Section>

            <div className={classes.container}>
                <div className={classes.avatarContainer}>
                    {userAvatar()}
                    {editProfileButton()}
                    {addAsFriendButton()}
                </div>
                {userNameWithBadge()}
                <div className={classes.userName}>
                    <Text size={30} color="dimmed">
                        {props.userName === ''
                            ? 'Error No User Name'
                            : props.userName}
                    </Text>
                </div>
            </div>
        </Card>
    );
}

export default UserCard;
