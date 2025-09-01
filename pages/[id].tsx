import TwitterLayout from "@/components/Layout/TwitterLayout";
import Image from "next/image";
import type { NextPage } from "next";
import { BsArrowLeftShort } from "react-icons/bs";
import { useCurrentUser } from "@/hooks/user";
import FeedCard from "@/components/FeedCard";
import { Tweet } from "@/gql/graphql";
import { useRouter } from "next/router";
const UserProfilePage: NextPage = () => {
  const { user } = useCurrentUser();
  const router = useRouter();

  console.log(router.query);
  return (
    <div>
      <TwitterLayout>
        <div>
          <nav className="flex items-center gap-3 py-3 px-3">
            <BsArrowLeftShort className="text-4xl" />
            <div>
              <h1 className="text-2xl font-bold">Saad Momin</h1>
              <h1 className="text-md font-bold text-slate-500">100 Tweets</h1>
            </div>
          </nav>
          <div className="p-4 border-b border-slate-800">
            {user?.profileImageURL && (
              <Image
                src={user?.profileImageURL}
                alt="user"
                className="rounded-full"
                width={100}
                height={100}
              />
            )}
            <h1 className="text-2xl font-bold mt-5">Saad Momin</h1>
          </div>
          <div>
            {(user?.tweets as Tweet[])?.map((tweet) =>
              tweet ? <FeedCard key={tweet.id} data={tweet as Tweet} /> : null
            )}
          </div>
        </div>
      </TwitterLayout>
    </div>
  );
};

export default UserProfilePage;
