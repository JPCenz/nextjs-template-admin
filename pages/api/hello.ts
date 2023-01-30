import { Database } from "@/types/supabase";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { NextApiRequest,NextApiResponse } from "next/types";
type Data = {
    name: string
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const supabaseServerClient = createServerSupabaseClient<Database>({
        req,
        res,
    })
    // const {
    //     data: { user },
    // } = await supabaseServerClient.auth.getUser()
    const {data } = await supabaseServerClient
        .from('profiles')
        .select('*')

    // res.status(200).json({ name: user?.email ?? '' })
    res.status(200).json({data})
}