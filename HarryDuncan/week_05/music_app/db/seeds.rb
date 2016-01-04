Producer.destroy_all

Producer.create(:name => 'Sonni Moore', :stage_name => 'Skrillex', :genre => 'EDM', :soundcloud_link => 'https://soundcloud.com/skrillex')

Track.destroy_all

Track.create(:name => 'Bangarang', :soundcloud_link => '<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/45719017&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>')