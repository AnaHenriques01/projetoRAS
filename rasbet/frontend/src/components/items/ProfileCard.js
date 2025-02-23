import "../../css/items/ProfileCard.scss";

export const ProfileCard = ({ user }) => {
    return (
        <div className="profile-card">
            <div>
                <p>Nome:</p>
                <p>{user.firstName}h</p>
            </div>
            <div>
                <p>Apelido:</p>
                <p>{user.lastName}h</p>
            </div>
            <div>
                <p>Data de Nascimento:</p>
                <p>{user.birthday}h</p>
            </div>
            <div>
                <p>NIF:</p>
                <p>{user.nif}h</p>
            </div>
            <div>
                <p>NIC:</p>
                <p>{user.nic}h</p>
            </div>
            <div>
                <p>Saldo:</p>
                <p>{user.wallet}h</p>
            </div>

        </div>
    );
};
