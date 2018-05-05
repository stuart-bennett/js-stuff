import { newPlaylist } from 'models/playlist'

describe("Given no playlist", () => {
    describe("When I want to create a new playlist", () => {
        test("Then I can use the factory method to create a default instace", () => {
            const actual = newPlaylist();
            const expected = {
                id: "",
                name: "",
                tracks: [],
                images: [],
                isNew: true
            };

            expect(actual).toEqual(expected);

        });
    });
});
