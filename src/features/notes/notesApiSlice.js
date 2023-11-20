import { apiSlice } from '../../app/api/api';

export const notesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addNewNote: builder.mutation({
      query: ({ notesData, username }) => ({
        url: `notes/${username}/add-new-note`,
        method: 'POST',
        body: notesData,
      }),
      invalidatesTags: ['notes'],
    }),

    updateNote: builder.mutation({
      query: ({ notesData, id, username }) => ({
        url: `notes/${username}/update-note/${id}`,
        method: 'PUT',
        body: notesData,
      }),
      invalidatesTags: ['notes'],
    }),

    deleteNote: builder.mutation({
      query: ({ notesData, id, username }) => ({
        url: `notes/${username}/delete-note/${id}`,
        method: 'DELETE',
        body: notesData,
      }),
      invalidatesTags: ['notes'],
    }),

    getAllNotes: builder.query({
      query: (username) => `notes/${username}/view-all-notes`,
      providesTags: ['notes'],
    }),

    updateCategory: builder.mutation({
      query: ({ id, username, category }) => ({
        url: `notes/${username}/update-category/${id}`,
        method: 'PUT',
        body: category,
      }),
      invalidatesTags: ['notes'],
    }),

    getNoteById: builder.query({
      query: ({ id, username }) => `notes/${username}/get-note/${id}`,
      providesTags: ['notes'],
    }),
  }),
});

export const {
  useAddNewNoteMutation,
  useGetNoteByIdQuery,
  useUpdateNoteMutation,
  useDeleteNoteMutation,
  useGetAllNotesQuery,
  useUpdateCategoryMutation,
} = notesApiSlice;
