import { supabase } from '../server/client';

export const readPosts = async () => {
    const { data, error } = await supabase
        .from('Jobs')
        .select('id, title, company, createdAt, type, location, applyUrl, description')
        .order('created_at', { ascending: false });
    if (error) {
        console.log(error);
    } else {
        return data;
    }
}

export const createPost = async (post) => {
    const { error } = await supabase
        .from('Jobs')
        .insert({ title: post.title, company: post.company, createdAt: post.createdAt, type: post.type, location: post.location, applyUrl: post.applyUrl, description: post.description })

    if (error) {
        console.log(error);
    }
    window.location = "/job-feed";
}

export const deletePost = async (job) => {
    const { error } = await supabase
        .from('Jobs')
        .delete()
        .eq('id', job.id);

    if (error) {
        console.log(error);
    }
    window.location = "/job-feed";
}