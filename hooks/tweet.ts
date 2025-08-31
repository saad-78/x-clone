import { graphqlClient } from "@/clients/api"
import { CreateTweetData } from "@/gql/graphql"
import { createTweetMutation } from "@/graphql/mutation/tweet"
import { getAllTweetsQuery } from "@/graphql/query/tweet"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import type { RequestDocument } from 'graphql-request'
import toast from "react-hot-toast"

export const useCreateTweet = () => {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (payload: CreateTweetData) => 
            graphqlClient.request(createTweetMutation as RequestDocument, { payload }), 
        onMutate: () => toast.loading('Creating Tweet', { id: '1' }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['all-tweets'] });
            toast.success('Tweet created successfully!', { id: '1' });
        },
        // onError: (error) => {
        //     console.error('Failed to create tweet:', error);
        //     toast.error('Failed to create tweet', { id: '1' });
        // }
    });

    return mutation;
}

export const useGetAllTweets = () => {
    const query = useQuery({
        queryKey: ['all-tweets'],
        queryFn: () => graphqlClient.request(getAllTweetsQuery as RequestDocument)
    });
    
    return {
        ...query, 
        tweets: (query.data as { getAllTweets: unknown[] } | undefined)?.getAllTweets
    };
}
