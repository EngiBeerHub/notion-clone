import {atom} from "jotai/vanilla/atom";
import {User} from "@supabase/supabase-js";
import {useAtom} from "jotai/react/useAtom";

const currentUserAtom = atom<User>();
export const useCurrentUserStore = () => {
    const [currentUser, setCurrentUser] = useAtom(currentUserAtom);
    return {currentUser, set: setCurrentUser};
};
