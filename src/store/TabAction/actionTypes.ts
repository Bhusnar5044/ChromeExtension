export const SAVE_TAB_INFO = 'SAVE_TAB_INFO'

export const GET_POSTS = 'GET_POSTS'

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

export interface TabData{
    id: number;
    title:string;
    url:string
}

export interface SaveTabInfo{
    type: typeof SAVE_TAB_INFO,
    payload:TabData
}

export interface GetPost{
    type: typeof GET_POSTS,
    payload:Post[]
}

export type DispatchActionTypes = SaveTabInfo | GetPost;