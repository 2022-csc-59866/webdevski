import { supabase } from '../server/client';

export const readDevskiPosts = async () => {
    const { data, error } = await supabase
        .from('Questions')
        .select('id, question_title, question_description')
        .order('created_at', { ascending: false });
    if (error) {
        console.log(error);
    } else {
        return data;
    }

}

export const createDevskiPost = async (post) => {
    const { error } = await supabase
        .from('Questions')
        .insert({ question_title: post.question_title, question_description: post.question_description})

    if (error) {
        console.log(error);
    }
    window.location = "/stackDevski";
}

/* export const deleteDevskiPost = async (job) => {
    const { error } = await supabase
        .from('Questions')
        .delete()
        .eq('id', job.id);

    if (error) {
        console.log(error);
    }
    window.location = "/stackDevski";
} */