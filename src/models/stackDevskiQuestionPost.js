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

export const searchDevskiQuestions = async (searchTerm) => {
    const{ data, error } = await supabase
        .from('Questions')
        .select('id, question_title, question_description')
        .ilike("question_title", `%${searchTerm}%`)

    if (error) {
        console.error("Error searching Supabase:", error);
        return null;
    }

    return data;
}

export const deleteDevskiPost = async (id) => {
    const { error } = await supabase
        .from('Questions')
        .delete()
        .eq('id', id);

    if (error) {
        console.log(error);
    }
    window.location = "/stackDevski";
}